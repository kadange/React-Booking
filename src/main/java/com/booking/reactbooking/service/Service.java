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
        booking.fixContainers();

        if (StringUtils.isEmpty(booking.getBookingNumber())) {
            return createBooking(booking);
        }else{
            return updateBooking(booking);
        }
    }

    private String updateBooking(Booking booking) {
//        Booking newBooking = findBookingByBookingNumber(booking.getBookingNumber());
//        newBooking.setBookingOffice(booking.getBookingOffice());
//        newBooking.setBookingParty(booking.getBookingParty());
//        newBooking.setShipper(booking.getShipper());
//        newBooking.setForwarder(booking.getForwarder());
//        newBooking.setConsignee(booking.getConsignee());
//        newBooking.setFromCity(booking.getFromCity());
//        newBooking.setToCity(booking.getToCity());
//        newBooking.setCargoNature(booking.getCargoNature());
//        newBooking.setCargoDescription(booking.getCargoDescription());
//        newBooking.setContainerDetails(booking.getContainerDetails());
        bookingRepository.save(booking);
        return "Booking Updated!";
    }

    private String createBooking(Booking booking) {
        booking.setBookingNumber(createBookingNumber());
        bookingRepository.save(booking);
        return "Booking Number created: " + booking.getBookingNumber();
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
