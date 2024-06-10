package com.example.tinkoff.Service;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter

public class PrimerLite extends Primer {
    public PrimerLite(int operator1, int operator2, String znak, Integer answer, int user_id) {
        super(operator1, operator2, znak, answer, user_id);
    }

    @Override
    public void someAbstractMethod() {

    }
}


