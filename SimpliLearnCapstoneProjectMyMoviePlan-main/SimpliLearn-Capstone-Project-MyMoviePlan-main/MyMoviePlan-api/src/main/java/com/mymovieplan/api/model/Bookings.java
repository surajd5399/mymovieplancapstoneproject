package com.mymovieplan.api.model;

import java.time.LocalDateTime;
import java.util.HashMap;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Bookings {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int bookingId;
	private int userId;
	private List<String> bookingDetails;
	private double bookingAmount;
	private LocalDateTime bookingStamp;
	
	public Bookings() {
		
	}
	public int getBookingId() {
		return bookingId;
	}
	public void setBookingId(int bookingId) {
		this.bookingId = bookingId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public List<String> getBookingDetails() {
		return bookingDetails;
	}
	public void setBookingDetails(List<String> bookingDetails) {
		this.bookingDetails = bookingDetails;
	}
	public double getBookingAmount() {
		return bookingAmount;
	}
	public void setBookingAmount(double bookingAmount) {
		this.bookingAmount = bookingAmount;
	}
	public LocalDateTime getBookingStamp() {
		return bookingStamp;
	}
	public void setBookingStamp(LocalDateTime bookingStamp) {
		this.bookingStamp = bookingStamp;
	}
	
	
	
}
