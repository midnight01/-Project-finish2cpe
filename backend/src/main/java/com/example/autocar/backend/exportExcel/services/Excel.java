package com.example.autocar.backend.exportExcel.services;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.List;

import com.example.autocar.backend.autoCar.entity.Customer;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.CellStyle;
import org.apache.poi.ss.usermodel.CreationHelper;
import org.apache.poi.ss.usermodel.Font;
import org.apache.poi.ss.usermodel.IndexedColors;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;



public class Excel {

    public static ByteArrayInputStream customersToExcel(List<Customer> customers) throws IOException {
        String[] COLUMNs = {"ลำดับที่", "ชื่อ-สกุล", "เบอร์มือถือ", "อีเมล์","เลข ปชช.","เงินเดือน","อายุงาน","สถานะงาน"};
        String[] COLUMNs1 = {"ประเภทรถ","ยี่่ห้อ","รุ่น","โฉมรถยนต์","รายละเอียดรุ่น","ปี","ขนาดเครื่องยนต์","ระบบเกียร์","จำนวนที่นั่ง","เลขไมล์","สี","ราคารถ"};
        String[] COLUMNs2 = {"เงินดาวน์","จำนวนงวด","ดอกเบี้ย/%ต่อปี","ยอดไฟแนนซ์","ค่างวดต่อเดือน"};
//        String[] COLUMNs = {"ลำดับที่", "ชื่อ-สกุล", "เบอร์มือถือ", "อีเมล์","เลข ปชช.","เงินเดือน","อายุงาน","สถานะงาน"," ","ประเภทรถ","ยี่่ห้อ","รุ่น","โฉมรถยนต์","รายละเอียดรุ่น","ปี","ขนาดเครื่องยนต์","ระบบเกียร์","จำนวนที่นั่ง","เลขไมล์","สี","ราคารถ"," ","เงินดาวน์","จำนวนงวด","ดอกเบี้ย/%ต่อปี","ยอดไฟแนนซ์","ค่างวดต่อเดือน"};


        try(
                Workbook workbook = new XSSFWorkbook();
                ByteArrayOutputStream out = new ByteArrayOutputStream();
        ){
            Sheet sheet = workbook.createSheet("Customers");
            Font headerFont = workbook.createFont();
            headerFont.setBold(true);
            headerFont.setColor(IndexedColors.BLUE.getIndex());
            CellStyle headerCellStyle = workbook.createCellStyle();
            headerCellStyle.setFont(headerFont);
            // Row for Header
            Row headerRow = sheet.createRow(0);
            // Header
            for (int col = 0; col < COLUMNs.length; col++) {
                Cell cell = headerRow.createCell(col);
                cell.setCellValue(COLUMNs[col]);
                cell.setCellStyle(headerCellStyle);

            }

            Sheet sheet1 = workbook.createSheet("Specification");
            Font headerFont1 = workbook.createFont();
            headerFont1.setBold(true);
            headerFont1.setColor(IndexedColors.BLUE.getIndex());
            CellStyle headerCellStyle1 = workbook.createCellStyle();
            headerCellStyle1.setFont(headerFont);
            // Row for Header
            Row headerRow1 = sheet1.createRow(0);
            // Header
            for (int col = 0; col < COLUMNs1.length; col++) {
                Cell cell = headerRow1.createCell(col);
                cell.setCellValue(COLUMNs1[col]);
                cell.setCellStyle(headerCellStyle1);
            }

            Sheet sheet2 = workbook.createSheet("Carloan");
            Font headerFont2 = workbook.createFont();
            headerFont2.setBold(true);
            headerFont2.setColor(IndexedColors.BLUE.getIndex());
            CellStyle headerCellStyle2 = workbook.createCellStyle();
            headerCellStyle2.setFont(headerFont);
            // Row for Header
            Row headerRow2 = sheet2.createRow(0);
            // Header
            for (int col = 0; col < COLUMNs2.length; col++) {
                Cell cell = headerRow2.createCell(col);
                cell.setCellValue(COLUMNs2[col]);
                cell.setCellStyle(headerCellStyle2);
            }

            int rowIdx = 1;
            for (Customer customer : customers) {
                Row row = sheet.createRow(rowIdx++);

                row.createCell(0).setCellValue(customer.getCustomerId());
                row.createCell(1).setCellValue(customer.getFirstName()+" " + customer.getLastName());
                row.createCell(2).setCellValue(customer.getPhoneNumber());
                row.createCell(3).setCellValue(customer.getEmail());
                row.createCell(4).setCellValue(customer.getIdCardNumber());
                row.createCell(5).setCellValue(customer.getSalaryBase());
                row.createCell(6).setCellValue(customer.getWorkExperience());
                row.createCell(7).setCellValue(customer.getJobStatu());
                row.createCell(8).setCellValue(customer.getCarloan().getCarloanId());

            }

            int rowIdx1 = 1;
            for (Customer customer : customers) {
                Row row = sheet1.createRow(rowIdx1++);


                row.createCell(0).setCellValue(customer.getCarloan().getSpecification().getTypeCar());
                row.createCell(1).setCellValue(customer.getCarloan().getSpecification().getBrand());
                row.createCell(2).setCellValue(customer.getCarloan().getSpecification().getGeneration());
                row.createCell(3).setCellValue(customer.getCarloan().getSpecification().getCarMakeover());
                row.createCell(4).setCellValue(customer.getCarloan().getSpecification().getModelDetails());
                row.createCell(5).setCellValue(customer.getCarloan().getSpecification().getYear());
                row.createCell(6).setCellValue(customer.getCarloan().getSpecification().getEngineSize());
                row.createCell(7).setCellValue(customer.getCarloan().getSpecification().getGearSystem());
                row.createCell(8).setCellValue(customer.getCarloan().getSpecification().getNumberSeats());
                row.createCell(9).setCellValue(customer.getCarloan().getSpecification().getMileage());
                row.createCell(10).setCellValue(customer.getCarloan().getSpecification().getColor());
                row.createCell(11).setCellValue(customer.getCarloan().getSpecification().getPrice());


            }

            int rowIdx2 = 1;
            for (Customer customer : customers) {
                Row row = sheet2.createRow(rowIdx2++);


                row.createCell(0).setCellValue(customer.getCarloan().getDeposit());
                row.createCell(1).setCellValue(customer.getCarloan().getNumberInstallment());
                row.createCell(2).setCellValue(customer.getCarloan().getInterest());
                row.createCell(3).setCellValue(customer.getCarloan().getFinancing());
                row.createCell(4).setCellValue(customer.getCarloan().getPayment());
                row.createCell(5).setCellValue(customer.getCarloan().getSpecification().getSpecificationId());


            }


            workbook.write(out);
            return new ByteArrayInputStream(out.toByteArray());
        }
    }


}
