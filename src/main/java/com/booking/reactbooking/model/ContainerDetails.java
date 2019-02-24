package com.booking.reactbooking.model;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name="Container_Details")
public class ContainerDetails {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id")
    private long id;

    @Column(name="size_type")
    private String sizeType;

    @Column(name="quantity")
    private int quantity;

    @Column(name="gross_weight")
    private float grossWeight;

    @Column(name="scale")
    private String scale;

    @Column(name="ob_haulage")
    private String obHaulage;

    @Column(name="ib_haulage")
    private String ibHaulage;

    @JsonIgnoreProperties("containerDetails")
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "booking_number")
    private Booking booking;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getSizeType() {
        return sizeType;
    }

    public void setSizeType(String sizeType) {
        this.sizeType = sizeType;
    }

    public int getQuantity() {
        return quantity;
    }

    public void setQuantity(int quantity) {
        this.quantity = quantity;
    }

    public float getGrossWeight() {
        return grossWeight;
    }

    public void setGrossWeight(float grossWeight) {
        this.grossWeight = grossWeight;
    }

    public String getScale() {
        return scale;
    }

    public void setScale(String scale) {
        this.scale = scale;
    }

    public String getObHaulage() {
        return obHaulage;
    }

    public void setObHaulage(String obHaulage) {
        this.obHaulage = obHaulage;
    }

    public String getIbHaulage() {
        return ibHaulage;
    }

    public void setIbHaulage(String ibHaulage) {
        this.ibHaulage = ibHaulage;
    }

    public Booking getBooking() {
        return booking;
    }

    public void setBooking(Booking booking) {
        this.booking = booking;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        ContainerDetails that = (ContainerDetails) o;
        return this.id == that.id;
    }

    @Override
    public int hashCode() {
        return Objects.hash(this.id);
    }

    @Override
    public String toString() {
        return "ContainerDetails{" +
                "id=" + this.id +
                '}';
    }
}
