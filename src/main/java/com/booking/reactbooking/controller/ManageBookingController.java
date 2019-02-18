package com.booking.reactbooking.controller;

import com.booking.reactbooking.model.Booking;
import com.booking.reactbooking.repository.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.*;

import static java.lang.Math.random;

@CrossOrigin(origins = "*")
@RestController
public class ManageBookingController {

//    private static final String template = "Hello, %s!";
//    private final AtomicLong counter = new AtomicLong();
//
//    @RequestMapping("/greeting")
//    public Greeting greeting(@RequestParam(value="name", defaultValue="World") String name) {
//        return new Greeting(counter.incrementAndGet(),
//                String.format(template, name));
//    }

    @Autowired
    BookingRepository bookingRepository;

    @PostMapping("/save")
    public String save(@RequestBody Booking booking) {
        boolean isCreate = StringUtils.isEmpty(booking.getBookingNumber());
        booking.setBookingNumber(createBookingNumber());
//        bookingRepository.save(booking);

        if (isCreate) {
            return booking.getBookingNumber();
        }
        return "Booking Updated!";
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
        bookingRepository.findByBookingNumber(bookingId);
        return new Booking();
    }

    /**
     * creating bean factory and use to get bean
     * https://stackoverflow.com/questions/35108778/spring-bean-with-runtime-constructor-arguments
     */
//    @Autowired
//    BeanFactory beanFactory;
//
//    @GetMapping("/test")
//    public Booking test(@RequestParam(value="bookingId") String bookingId) {
//        Booking booking = new Booking();
//        booking.setBookingNumber(bookingId);
//        Service service = beanFactory.getBean(Service.class,booking);
//        return service.getBookingTest();
//    }
}
