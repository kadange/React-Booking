package com.booking.reactbooking.service;

import com.booking.reactbooking.model.Booking;
import static java.lang.Math.random;

public class Service {

    private Booking booking;

    public Service(boolean isCreate, Booking booking) {
        this.booking = booking;
        if(isCreate) {
            this.booking.setBookingNumber(createBookingNumber());
        }
        saveBooking(booking);
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
}
