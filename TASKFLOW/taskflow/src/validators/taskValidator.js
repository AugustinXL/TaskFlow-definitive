function validateTaskPayload(payload) {
  const errors = [];
  if (!payload) {
    errors.push('Payload vazio');
    return errors;
  }
  if (!payload.title || typeof payload.title !== 'string' || payload.title.trim() === '') {
    errors.push('Título é obrigatório e deve ser uma string não vazia');
  } else if (payload.title.length > 200) {
    errors.push('Título deve ter no máximo 200 caracteres');
  }

  if (payload.description && typeof payload.description !== 'string') {
    errors.push('Descrição deve ser string');
  }

  if (payload.done !== undefined && typeof payload.done !== 'boolean') {
    errors.push('Done deve ser boolean');
  }

  return errors;
}

module.exports = { validateTaskPayload };
