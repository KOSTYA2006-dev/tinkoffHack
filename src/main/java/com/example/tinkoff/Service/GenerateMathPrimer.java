package com.example.tinkoff.Service;


import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.Random;

@NoArgsConstructor
@Getter
public class GenerateMathPrimer  {

    private Integer userId;
    private Integer complexity;
    private Integer answer;
    private String sign;

    private Random random = new Random();

    public GenerateMathPrimer(Integer userId, Integer complexity, String sign) {
        this.userId = userId;
        this.complexity = complexity;
        this.sign = (sign != null && !sign.isEmpty()) ? sign : getRandomSign();

    }

    private String getRandomSign() {
        String[] operators = {"+", "-", "/", "*"};
        return operators[random.nextInt(operators.length)];
    }

    public int[] generateOperands() {
        int operand1 = 0;
        int operand2 = 0;

        switch (this.complexity) {
            case 1:
                operand1 = random.nextInt(99);
                operand2 = generateSecondOperand(operand1);
                return new int[]{operand1, operand2};
            case 2:
                operand1 = random.nextInt(333);
                operand2 = generateSecondOperand(operand1);
                return new int[]{operand1, operand2};
            case 3:
                operand1 = random.nextInt(200);
                operand2 = random.nextInt(100);
                int operand3 = random.nextInt(30);
                int operand4 = random.nextInt(10);
                return new int[]{operand1, operand2, operand3, operand4};
            default:
                return null;
        }
    }

    private int generateSecondOperand(int operand1) {
        int operand2;
        switch (this.sign) {
            case "-":
                operand2 = random.nextInt(operand1 + 1);
                break;
            case "/":
                do {
                    operand2 = random.nextInt(99);
                } while (operand2 == 0);
                break;
            default:
                operand2 = random.nextInt(99);
        }
        return operand2;
    }

    public PrimerLite generateProblem() {
        int[] operands = generateOperands();
        int operand1 = operands[0];
        int operand2 = operands[1];
        String operation = this.sign;

        switch (operation) {
            case "+":
                answer = operand1 + operand2;
                break;
            case "-":
                answer = operand1 - operand2;
                break;
            case "/":
                answer = operand2 != 0 ? operand1 / operand2 : 0;
                break;
            case "*":
                answer = operand1 * operand2;
                break;
        }

        return new PrimerLite(operand1, operand2, operation, answer, 1);
    }
}
