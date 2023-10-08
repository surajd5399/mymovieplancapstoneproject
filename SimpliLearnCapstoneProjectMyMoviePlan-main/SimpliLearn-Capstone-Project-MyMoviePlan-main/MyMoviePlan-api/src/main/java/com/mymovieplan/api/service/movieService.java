package com.mymovieplan.api.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.mymovieplan.api.model.movie;
import com.mymovieplan.api.repository.movieRepo;

@Service
public class movieService {

		@Autowired
		movieRepo repo;
		
		public List<movie> getAllMovie(){
			return repo.findAll();
		}
		
		public movie findById(movie mv){
			return repo.findById(mv.getMovieId()).get();
		}
		
		public movie findByName(movie mv) {
			return repo.findByName(mv.getTitle());
		}
		public Map<String,String> addMovie(movie mv){
			Map<String,String> status = new HashMap<>();
			status.put("status", null);
			try {
				repo.save(mv);
				status.replace("status", "1");
			} catch (Exception e) {
				System.out.println(e);
				status.replace("status", "0");
			}
			return status;
		}
		
		public Map<String,String> updateMovie(movie mv){
			Map<String,String> status = new HashMap<>();
			movie mv1 = repo.findById(mv.getMovieId()).get();
			
			if(mv.getTitle()==null) {
				mv.setTitle(mv1.getTitle());
			}
			if(mv.getGenre()==null) {
				mv.setGenre(mv1.getGenre());
			}
			if(mv.getRating()==0) {
				mv.setRating(mv1.getRating());
			}
			if(mv.getReleasedate()==null) {
				mv.setReleasedate(mv1.getReleasedate());
			}
			//mv.setStatus(mv1.isStatus());
			if(mv.getActors()==null) {
				mv.setActors(mv1.getActors());
			}
			if(mv.getRuntime()==0) {
				mv.setRuntime(mv1.getRuntime());
			}
			if(mv.getLanguage()==null) {
				mv.setLanguage(mv1.getLanguage());
			}
			if(mv.getImageUrl()==null) {
				mv.setImageUrl(mv1.getImageUrl());
			}
			if(mv.getDirector()==null) {
				mv.setDirector(mv1.getDirector());
			}
			if(mv.getMoviePrice()==0) {
				mv.setMoviePrice(mv1.getMoviePrice());
			}
			
			
			status.put("status", null);
			try {
				repo.save(mv);
				status.replace("status", "1");
			} catch (Exception e) {
				System.out.println(e);
				status.replace("status", "0");
			}
			return status;
		}
		
		public Map<String,String> deleteMovie(movie mv){
			Map<String,String> status = new HashMap<>();
			status.put("status", null);
			try {
				repo.delete(mv);
				status.replace("status", "1");
			} catch (Exception e) {
				System.out.println(e);
				status.replace("status", "0");
			}
			return status;
		}
		
		public Map<String,String> toggleStatus(movie mv){
			Map<String,String> status =new HashMap<>();
			movie mv1 = repo.findById(mv.getMovieId()).get();
			status.put("status", null);
			mv1.setStatus(mv.isStatus());
			try {
				repo.save(mv1);
				status.replace("status", "1");
			} catch (Exception e) {
				System.out.println();
				status.replace("status", "0");
			}
			return status;
		}
}
