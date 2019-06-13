package com.example.autocar.backend.exportExcel.controller;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.util.List;

import com.example.autocar.backend.autoCar.entity.Customer;
import com.example.autocar.backend.autoCar.repository.CustomerRepository;
import com.example.autocar.backend.exportExcel.services.Excel;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/data")
public class ExcelCustomer {
    @Autowired
    CustomerRepository customerRepository;

    @GetMapping(value = "/download/customers.xlsx")
    public ResponseEntity<InputStreamResource> excelCustomersReport() throws IOException {
        List<Customer> customers = (List<Customer>) customerRepository.findAll();
        ByteArrayInputStream in = Excel.customersToExcel(customers);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=customers.xlsx");//ตั้งชื่อไฟล์
        return ResponseEntity
                .ok()
                .headers(headers)
                .body(new InputStreamResource(in));
    }

    @GetMapping(value = "/download/date/{date}/dateEnd/{dateEnd}/customers.xlsx")
    public ResponseEntity<InputStreamResource> excelCustomersReportDate(@PathVariable String date,@PathVariable String dateEnd) throws IOException {
        List<Customer> customers = (List<Customer>)customerRepository.findByDateAndDateEnd2(date,dateEnd);
        ByteArrayInputStream in = Excel.customersToExcel(customers);
        HttpHeaders headers = new HttpHeaders();
        headers.add("Content-Disposition", "attachment; filename=customers.xlsx");//ตั้งชื่อไฟล์
        return ResponseEntity
                .ok()
                .headers(headers)
                .body(new InputStreamResource(in));
    }
}
