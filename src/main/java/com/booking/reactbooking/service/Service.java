package com.booking.reactbooking.service;

import com.booking.reactbooking.model.Booking;
import com.booking.reactbooking.model.ContainerDetails;
import com.booking.reactbooking.repository.BookingRepository;
import com.booking.reactbooking.repository.ContainerDetailsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import java.util.List;
import java.util.stream.Collectors;

import static java.lang.Math.random;

@org.springframework.stereotype.Service
public class Service {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private ContainerDetailsRepository containerDetailsRepository;

    public String saveBooking(Booking booking) {
        //persist in DB
        try{
            booking.fixContainers();

            if (StringUtils.isEmpty(booking.getBookingNumber())) {
                return createBooking(booking);
            }else{
                return updateBooking(booking);
            }
        }catch(Exception e) {
            return "Exception occurred! Please try again...";
        }
    }

    private String updateBooking(Booking booking) {
        Booking oldBooking = findBookingByBookingNumber(booking.getBookingNumber());
        List<ContainerDetails> toRemove = oldBooking.getContainerDetails().stream()
                .filter(oldContainer -> !booking.getContainerDetails().contains(oldContainer))
                .collect(Collectors.toList());
        toRemove.forEach(remove -> containerDetailsRepository.delete(remove));
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
