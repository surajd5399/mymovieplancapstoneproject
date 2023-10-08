package com.mymovieplan.api.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mymovieplan.api.model.Bookings;

@Repository
public interface bookingsRepo extends JpaRepository<Bookings, Integer>{

	@Query("Select b from Bookings b where b.userId=?1")
	public List<Bookings> getAllBookingsByUser(int uid);
}
