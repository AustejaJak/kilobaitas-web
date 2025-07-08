package com.example.backend.entities.user;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class LegalUser extends User {
    public String companyName;

    public String companyEmail;

    public String companyCode;

    public String companyVat;

    public String companyPhone;

    public String companyFax;

    public String companyPostalCode;

    public String companyAddress;

    @Enumerated(EnumType.STRING)
    public CompanyCity companyCity;

    public String companyCountry;
}
