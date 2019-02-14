package com.booking.reactbooking.model;

public class ContainerDetails {
    String sizeType;
    int quantity;
    long grossWeight;
    String scale;
    String obHaulage;
    String ibHaulage;

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

    public long getGrossWeight() {
        return grossWeight;
    }

    public void setGrossWeight(long grossWeight) {
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
}
