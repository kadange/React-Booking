package com.booking.reactbooking.service;

import com.booking.reactbooking.model.Booking;
import com.booking.reactbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import static java.lang.Math.random;

public class Service {

    @Autowired
    private BookingRepository bookingRepository;

    private Booking booking;

    public Service(Booking booking) {
        this.booking = booking;
        if(isCreate()) {
            this.booking.setBookingNumber(createBookingNumber());
        }
        saveBooking(booking);
    }

    private boolean isCreate() {
        return StringUtils.isEmpty(this.booking.getBookingNumber());
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

    public void saveBooking(Booking booking) {
        //persist in DB
//        bookingRepository.save(booking);
    }

    public Booking findBookingByBookingNumber(String bookingNumber) {
        //search booking by booking number
        return null;
    }

    public Booking deleteBookingByBookingNumber(String bookingNumber) {
        //delete booking by booking number
        return null;
    }

    public String getBookingNumber() {
        return this.booking.getBookingNumber();
    }

    public Booking getBookingTest() {
        return this.booking;
    }
}
