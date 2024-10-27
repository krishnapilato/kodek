package com.personal.portfolio;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cache.annotation.EnableCaching;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.personal.portfolio.model.Role;
import com.personal.portfolio.model.User;
import com.personal.portfolio.repository.UserRepository;

@SpringBootApplication
@EnableCaching
public class PortfolioApplication {

	private static final Logger logger = LoggerFactory.getLogger(PortfolioApplication.class);

	@Value("${spring.security.user.name}")
	private String adminUsername;

	@Value("${spring.security.user.password}")
	private String adminPassword;

	public static void main(String[] args) {
		SpringApplication.run(PortfolioApplication.class, args);
	}

	@Bean
	public CommandLineRunner initDatabase(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		return args -> {
			if (!userRepository.existsByEmail("admin.email@gmail.com")) {
				createAdminUser(userRepository, passwordEncoder);
			} else {
				logger.info("Admin user already exists. Skipping creation.");
			}
		};
	}

	private void createAdminUser(UserRepository userRepository, PasswordEncoder passwordEncoder) {
		User adminUser = new User();
		adminUser.setFullName(adminUsername);
		adminUser.setEmail("admin.email@gmail.com");
		adminUser.setPassword(passwordEncoder.encode(adminPassword));
		adminUser.setRole(Role.ADMIN);
		adminUser.setEnabled(true);

		userRepository.save(adminUser);
		logger.info("Created default admin user with email: admin.email@gmail.com");
	}
}