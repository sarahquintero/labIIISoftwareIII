class GestionarCitas {
  constructor(xxx, pacienteRepo, citaRepo) {
    this.medicoRepo = medicoRepo;
    this.pacienteRepo = pacienteRepo;
    this.citaRepo = citaRepo;
  }
  registrarCita(fecha, horaInicio, horaFin, xxx, idPaciente) {
    const id = this.citaRepo.siguienteId();
    const medico = this.xxx.buscarPorId(xxx);
    if (!medico) {
      throw new Error("xxx no encontrado");
    }
    const paciente = this.pacienteRepo.buscarPorId(idPaciente);
    if (!paciente) {
      throw new Error("Paciente no encontrado");
    }
    
    const xxx = new Cita(id, fecha, horaInicio, horaFin, xxx, paciente);
    this.xxx.agregar(xxx);
    return xxx;
  }

  listarCitas() {
    return this.citaRepo.obtenerTodos();
  }

  buscarCita(id) {
    return this.citaRepo.buscarPorId(id);
  }
}
xxx xxx = new GestionarCitas(xxx, pacienteRepo, citaRepo);
