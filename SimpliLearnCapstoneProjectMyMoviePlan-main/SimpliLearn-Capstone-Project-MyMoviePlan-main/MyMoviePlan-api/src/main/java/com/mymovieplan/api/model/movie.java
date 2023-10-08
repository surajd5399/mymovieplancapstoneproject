package com.mymovieplan.api.model;

import java.sql.Date;
import java.util.List;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
@Entity
public class movie {
		@Id
		@GeneratedValue(strategy = GenerationType.IDENTITY)
		private int movieId;
		private String title;
		private String genre;
		private float rating;
		private Date releaseDate;
		private boolean status;
		private List<String> actors;
		private double runtime;
		private String language;
		private String imageUrl;
		private String director;
		private double moviePrice;
		
		public movie() {
			// TODO Auto-generated constructor stub
		}

		public int getMovieId() {
			return movieId;
		}

		public void setMovieId(int movieId) {
			this.movieId = movieId;
		}

		public String getTitle() {
			return title;
		}

		public void setTitle(String title) {
			this.title = title;
		}

		public String getGenre() {
			return genre;
		}

		public void setGenre(String genre) {
			this.genre = genre;
		}

		

		public Date getReleasedate() {
			return releaseDate;
		}

		public void setReleasedate(Date releasedate) {
			this.releaseDate = releasedate;
		}

		public boolean isStatus() {
			return status;
		}

		public void setStatus(boolean status) {
			this.status = status;
		}

		public List<String> getActors() {
			return actors;
		}

		public void setActors(List<String> actors) {
			this.actors = actors;
		}

		public double getRuntime() {
			return runtime;
		}

		public void setRuntime(double runtime) {
			this.runtime = runtime;
		}

		public String getLanguage() {
			return language;
		}

		public void setLanguage(String language) {
			this.language = language;
		}

		public String getImageUrl() {
			return imageUrl;
		}

		public void setImageUrl(String imageUrl) {
			this.imageUrl = imageUrl;
		}
		
		public String getDirector() {
			return director;
		}

		public void setDirector(String director) {
			this.director = director;
		}

		public double getMoviePrice() {
			return moviePrice;
		}

		public void setMoviePrice(double moviePrice) {
			this.moviePrice = moviePrice;
		}
		public float getRating() {
			return rating;
		}

		public void setRating(float rating) {
			this.rating = rating;
		}

		@Override
		public String toString() {
			return "movie [movieId=" + movieId + ", title=" + title + ", genre=" + genre + ", rating=" + rating
					+ ", releasedate=" + releaseDate + ", status=" + status + ", actors=" + actors + ", runtime="
					+ runtime + ", language=" + language + ", imageUrl=" + imageUrl + ", director=" + director
					+ ", moviePrice=" + moviePrice + "]";
		}

		
		
		
}
