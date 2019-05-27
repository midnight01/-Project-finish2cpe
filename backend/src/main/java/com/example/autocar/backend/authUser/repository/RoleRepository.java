package com.example.autocar.backend.authUser.repository;

import java.util.Optional;

import com.example.autocar.backend.authUser.entity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
    Optional<Role> findByName(String name);
}