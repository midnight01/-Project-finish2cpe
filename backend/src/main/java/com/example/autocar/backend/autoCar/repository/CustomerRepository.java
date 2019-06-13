package com.example.autocar.backend.autoCar.repository;

import com.example.autocar.backend.autoCar.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface CustomerRepository extends JpaRepository<Customer , Long> {
    Customer findByCustomerId(Long customerId);
    List<Customer> findByDate(String date);
    @Query("SELECT a FROM Customer a WHERE date BETWEEN  :date AND :dateEnd")
    List<Customer> findByDateAndDateEnd2(@Param("date") String date, @Param("dateEnd") String dateEnd);
}
