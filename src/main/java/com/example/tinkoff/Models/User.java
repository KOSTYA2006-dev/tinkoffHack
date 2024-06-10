package com.example.tinkoff.Models;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.antlr.v4.runtime.misc.NotNull;


@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="users")
public class User
{

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    @Column(nullable=false)
    private String username;


    @Column(nullable=false, unique=true)
    private String email;

    @Column(nullable=false)
    private String password;

    @Column(columnDefinition = "VARCHAR(255) DEFAULT 0")
    private Integer count;

    @Column(columnDefinition = "VARCHAR(255) DEFAULT 0")
    private Integer cup;

    @Column(columnDefinition = "VARCHAR(255) DEFAULT 0")
    private Integer loose;

    @Column(columnDefinition = "VARCHAR(255) DEFAULT 0")
    private Integer lvl;


}
