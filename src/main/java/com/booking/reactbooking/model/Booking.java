package com.booking.reactbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="Booking")
public class Booking {

    @Id
    @Column(name="booking_number")
    private String bookingNumber;

    @Column(name="booking_office")
    private String bookingOffice;

    @Column(name="booking_party")
    private String bookingParty;

    @Column(name="shipper")
    private String shipper;

    @Column(name="forwarder")
    private String forwarder;

    @Column(name="consignee")
    private String consignee;

    @Column(name="from_city")
    private String fromCity;

    @Column(name="to_city")
    private String toCity;

    @Column(name="cargo_description")
    private String cargoDescription;

    @Column(name="cargo_nature")
    private String cargoNature;

    @JsonIgnoreProperties("booking")
    @OneToMany(fetch = FetchType.EAGER, mappedBy = "booking", cascade = CascadeType.ALL)
    private List<ContainerDetails> containerDetails;

    @JsonIgnoreProperties("booking")
    @ManyToOne(fetch=FetchType.EAGER)
    @JoinColumn(name="user_id")
    private User user;

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

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}