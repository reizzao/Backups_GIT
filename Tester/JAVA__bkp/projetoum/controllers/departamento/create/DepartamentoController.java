package com.empresa.projetoum.controllers;
import com.empresa.projetoum.entities.Departamento;

public class DepartamentoController {

  public Departamento create(Departamento departamento) {
    return new Departamento(departamento);
  }
}