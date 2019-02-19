package com.booking.reactbooking.service;

import com.booking.reactbooking.model.Booking;
import com.booking.reactbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import static java.lang.Math.random;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    private BookingRepository bookingRepository;

    public String saveBooking(Booking booking) {
        //persist in DB
        String response = "Booking Updated!";
        booking.fixContainers();

        if (StringUtils.isEmpty(booking.getBookingNumber())) {
            booking.setBookingNumber(createBookingNumber());
            response =  booking.getBookingNumber();
        }

        bookingRepository.save(booking);

        return response;
    }

    private String createBookingNumber() {
        String bookingNumber = "";
        for(int i=0; i<10; i++) {
            if(i==0) {
                bookingNumber += (int)(random() * 9) + 1;
            }else{
                bookingNumber += (int)(random() * 9);
            }
        }
        return bookingNumber;
    }

    public Booking findBookingByBookingNumber(String bookingNumber) {
        //search booking by booking number
        return bookingRepository.findByBookingNumber(bookingNumber);
    }

    public Booking deleteBookingByBookingNumber(String bookingNumber) {
        //delete booking by booking number
        return null;
    }
}
