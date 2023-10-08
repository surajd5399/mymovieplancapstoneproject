package com.mymovieplan.api.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mymovieplan.api.model.Bookings;
import com.mymovieplan.api.model.Users;
import com.mymovieplan.api.repository.bookingsRepo;

@Service
public class bookingsService {
	@Autowired
	private bookingsRepo repo;

	public List<Bookings> getAllBookings() {
		return repo.findAll();
	}

	public Bookings saveBooking(Bookings bk) {
		return repo.save(bk);
	}

	public List<Bookings> getAllBookingsByUsername(Users usr) {
		return repo.getAllBookingsByUser(usr.getUid());
	}
}
