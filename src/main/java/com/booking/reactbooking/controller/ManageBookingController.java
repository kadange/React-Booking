package com.booking.reactbooking.controller;

import com.booking.reactbooking.model.Booking;
import com.booking.reactbooking.service.Service;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*")
@RestController
public class ManageBookingController {

    @Autowired
    Service service;

    @PostMapping("/save")
    public String save(@RequestBody Booking booking) {
        return service.saveBooking(booking);
    }

    @GetMapping("/retrieveBooking")
    public Booking retrieveBooking(@RequestParam(value = "bookingNumber") String bookingNumber) {
        return service.findBookingByBookingNumber(bookingNumber);
    }

}
