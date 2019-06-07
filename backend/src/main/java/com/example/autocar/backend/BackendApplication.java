package com.example.autocar.backend;

import com.example.autocar.backend.authUser.entity.Role;
import com.example.autocar.backend.authUser.repository.RoleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationRunner;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import java.util.Arrays;
import java.util.List;
import java.util.stream.Stream;

@SpringBootApplication
public class BackendApplication {
//	@Autowired
//	RoleRepository roleRepository;

	public static void main(String[] args) {
		SpringApplication.run(BackendApplication.class, args);
	}

//	@Override
//	public void run(String... args) throws Exception {
//
//		List<Role> role = Arrays.asList(
//				new Role(Long.valueOf(1), "ROLE_ADMIN"));
//
//		roleRepository.saveAll(role);
//	}

//	@Bean
//	ApplicationRunner init(RoleRepository roleRepository) {
//		return args -> {
//
//
//			Stream.of("ROLE_ADMIN").forEach(name -> {
//
//				Role role = new Role();
//				role.setName("ROLE_ADMIN");
//				roleRepository.save(role);
//
//
//			});
//		};
//	}


}
