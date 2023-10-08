package com.mymovieplan.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

import com.mymovieplan.api.model.Users;


@Repository
public interface userRepository extends JpaRepository<Users, Integer>{
	
	@Query("SELECT u from Users u WHERE u.userName=?1")
	Users findByUserName(String name);
	@Query("SELECT u from Users u WHERE u.email=?1")
	Users findByEmail(String email);

}
