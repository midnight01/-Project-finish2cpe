package com.example.autocar.backend.autoCar.repository;

import com.example.autocar.backend.autoCar.entity.Specification;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SpecificationRepository extends JpaRepository<Specification,Long> {
    Specification findBySpecificationId(Long specificationId);
}
