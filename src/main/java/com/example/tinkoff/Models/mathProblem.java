package com.example.tinkoff.Models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="MathProblem")
public class mathProblem {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    Long id;

    String primer;

    Long condition;

    String date;

}
