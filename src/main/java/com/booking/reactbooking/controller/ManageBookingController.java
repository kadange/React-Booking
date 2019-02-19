package com.booking.reactbooking.controller;

import com.booking.reactbooking.model.Booking;
import com.booking.reactbooking.model.Greeting;
import com.booking.reactbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import java.util.concurrent.atomic.AtomicLong;

import static java.lang.Math.random;

@CrossOrigin(origins = "*")
@RestController
public class ManageBookingController {

    private static final String template = "Hello, I am %s!";
    private final AtomicLong counter = new AtomicLong();

    @RequestMapping("/greeting")
    public Greeting greeting(@RequestParam(value = "name", defaultValue = "World") String name) {
        return new Greeting(counter.incrementAndGet(),
                String.format(template, name));
    }

    @Autowired
    BookingRepository bookingRepository;

    @PostMapping("/save")
    public String save(@RequestBody Booking booking) {
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
        for (int i = 0; i < 10; i++) {
            if (i == 0) {
                bookingNumber += (int) (random() * 9) + 1;
            } else {
                bookingNumber += (int) (random() * 9);

            }
        }
        return bookingNumber;
    }

    @GetMapping("/test")
    public Booking test(@RequestParam(value = "bookingId") String bookingId) {
        return bookingRepository.findByBookingNumber(bookingId);
    }

}
