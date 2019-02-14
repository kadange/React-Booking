package com.booking.reactbooking.model;

import javax.persistence.Entity;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Booking {
    private String bookingNumber;
    private String bookingOffice;
    private String bookingParty;
    private String shipper;
    private String forwarder;
    private String consignee;
    private String fromCity;
    private String toCity;
    private String cargoDescription;
    private String cargoNature;
    private List<ContainerDetails> containerDetails;

    public String getBookingNumber() {
        return bookingNumber;
    }

    public void setBookingNumber(String bookingNumber) {
        this.bookingNumber = bookingNumber;
    }

    public String getBookingOffice() {
        return bookingOffice;
    }

    public void setBookingOffice(String bookingOffice) {
        this.bookingOffice = bookingOffice;
    }

    public String getBookingParty() {
        return bookingParty;
    }

    public void setBookingParty(String bookingParty) {
        this.bookingParty = bookingParty;
    }

    public String getShipper() {
        return shipper;
    }

    public void setShipper(String shipper) {
        this.shipper = shipper;
    }

    public String getForwarder() {
        return forwarder;
    }

    public void setForwarder(String forwarder) {
        this.forwarder = forwarder;
    }

    public String getConsignee() {
        return consignee;
    }

    public void setConsignee(String consignee) {
        this.consignee = consignee;
    }

    public String getFromCity() {
        return fromCity;
    }

    public void setFromCity(String fromCity) {
        this.fromCity = fromCity;
    }

    public String getToCity() {
        return toCity;
    }

    public void setToCity(String toCity) {
        this.toCity = toCity;
    }

    public String getCargoDescription() {
        return cargoDescription;
    }

    public void setCargoDescription(String cargoDescription) {
        this.cargoDescription = cargoDescription;
    }

    public String getCargoNature() {
        return cargoNature;
    }

    public void setCargoNature(String cargoNature) {
        this.cargoNature = cargoNature;
    }

    public List<ContainerDetails> getContainerDetails() {
        return new ArrayList<>(containerDetails);
    }

    public void setContainerDetails(List<ContainerDetails> containerDetails) {
        this.containerDetails = containerDetails;
    }
}