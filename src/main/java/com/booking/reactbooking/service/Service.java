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

    public void process() {
        //persist in DB
    }

    public String getBookingNumber() {
        return this.booking.getBookingNumber();
    }
}
