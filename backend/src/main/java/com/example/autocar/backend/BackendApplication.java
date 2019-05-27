package com.example.autocar.backend;

import com.example.autocar.backend.authUser.entity.Role;
import com.example.autocar.backend.authUser.repository.RoleRepository;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.util.stream.Stream;

@SpringBootApplication
public class BackendApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

	@Bean
	ApplicationRunner init(RoleRepository roleRepository) {
		return args -> {


			Stream.of("ROLE_ADMIN", "ROLE_EMPLOYEE", "ROLE_CUSTOMER").forEach(name -> {

				Role role = new Role();
				role.setName(name);
				roleRepository.save(role);


			});
		};
	}
}
