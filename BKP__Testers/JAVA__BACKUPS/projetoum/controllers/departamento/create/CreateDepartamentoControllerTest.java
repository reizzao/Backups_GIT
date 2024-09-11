package com.empresa.projetoum.controllers;
import org.junit.Test;
import lombock.Test;
import com.empresa.projetoum.controllers.DepartamentoController;

class CreateDepartamentoControllerTest {

  @Test
  public void should_be_create_new_Departamento() {
    DepartamentoController departamento = new DepartamentoController();
    departamento.setNome("dep1");

    DepartamentoController departamentoController = new DepartamentoController();

    departamentoController.create();
    DepartamentoController createdDepartamento = departamentoController.create(departamento);
  }

  assertNotNull(createdDepartamento.nome);

}