package com.booking.reactbooking.controller;

import com.booking.reactbooking.model.Booking;
import com.booking.reactbooking.model.Greeting;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

@CrossOrigin(origins = "*")
@RestController
public class ManageBookingController {
//    private static final String template = "Hello, %s!";
//    private final AtomicLong counter = new AtomicLong();

//    @RequestMapping("/greeting")
//    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
//        return new Greeting(counter.incrementAndGet(),
//                String.format(template, name));
//    }

    @PostMapping("/save")
    public Booking save(@RequestBody Booking booking) {
        return booking;
    }
}
