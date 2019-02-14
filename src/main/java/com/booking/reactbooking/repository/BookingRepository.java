package com.booking.reactbooking.repository;

import com.booking.reactbooking.model.Booking;
import org.springframework.data.repository.CrudRepository;

public interface BookingRepository extends CrudRepository<Booking, Long> {
}
