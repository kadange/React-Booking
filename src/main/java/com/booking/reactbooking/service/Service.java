package com.booking.reactbooking.service;

import static java.lang.Math.random;

public class Service {

    private static String createBookingNumber() {
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

    public static void main(String[] args) {
        System.out.println(createBookingNumber());
    }
}
