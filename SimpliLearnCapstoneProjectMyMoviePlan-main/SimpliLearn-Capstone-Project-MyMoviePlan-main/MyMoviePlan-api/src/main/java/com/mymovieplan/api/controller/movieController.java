package com.mymovieplan.api.controller;

import java.sql.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.mymovieplan.api.model.movie;
import com.mymovieplan.api.service.movieService;

@CrossOrigin(allowedHeaders = "*")
@RestController
@RequestMapping("/api/movie")
public class movieController {

	@Autowired
	movieService service;

	@GetMapping("/all")
	public List<movie> getAllMovies() {
		return service.getAllMovie();
	}
	@GetMapping("/find/{id}")
	public movie getById(@PathVariable("id")int id ) {
		movie mv = new movie();
		mv.setMovieId(id);
		return service.findById(mv);
	}

	@PostMapping("/addMovie")
	public Map<String, String> addMovie(@RequestBody movie mv) {
		System.out.println(mv.getReleasedate());
		return service.addMovie(mv);
	}

	@GetMapping("/movieName")
	public movie getMovieByName(@RequestParam(name = "title") String name) {
		movie mv = new movie();
		mv.setTitle(name);
		return service.findByName(mv);
	}

	@PatchMapping("/statusChange")
	public Map<String, String> changeStatus(@RequestBody movie mv) {
		return service.toggleStatus(mv);
	}
	
	@PatchMapping("/updateMovie")
	public Map<String,String> updateMovieDetails(@RequestBody movie mv){
		return service.updateMovie(mv);
	}
}
