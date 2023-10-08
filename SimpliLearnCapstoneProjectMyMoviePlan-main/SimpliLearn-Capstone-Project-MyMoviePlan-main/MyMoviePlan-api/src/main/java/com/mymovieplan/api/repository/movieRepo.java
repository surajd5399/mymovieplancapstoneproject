package com.mymovieplan.api.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.mymovieplan.api.model.movie;

@Repository
public interface movieRepo extends JpaRepository<movie, Integer> {
	@Query("SELECT m FROM movie m WHERE m.title=?1")
	public movie findByName(String title);
}
