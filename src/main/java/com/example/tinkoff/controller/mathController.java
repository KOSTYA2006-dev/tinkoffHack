package com.example.tinkoff.controller;


import com.example.tinkoff.DTO.PrimerBodyDTO;
import com.example.tinkoff.Service.GenerateMathPrimer;
import com.example.tinkoff.Service.PrimerLite;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@RestController
@RequestMapping("/api")
public class mathController {

    @PostMapping("/generate")
    public PrimerLite test(@RequestBody PrimerBodyDTO primerBodyDTO){
        int complexity = primerBodyDTO.getComplexity();
        int user_id = primerBodyDTO.getUser_id();
        String sign = primerBodyDTO.getSign();
        GenerateMathPrimer primer = new GenerateMathPrimer(user_id, complexity, sign);
        return primer.generateProblem();
    }
}
