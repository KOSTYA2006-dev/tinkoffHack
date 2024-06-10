package com.example.tinkoff.Service;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public abstract class Primer {
    private int operator1;
    private int operator2;
    private String znak;
    private Integer answer;
    private int user_id;

    public Primer(int operator1, int operator2, String znak, Integer answer, int user_id) {
        this.operator1 = operator1;
        this.operator2 = operator2;
        this.znak = znak;
        this.answer = answer;
        this.user_id = user_id;
    }

    public abstract void someAbstractMethod();
}

