
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('titulo') }}</label>
    <div>
        {{ Form::text('titulo', $tablaEjemplo->titulo, ['class' => 'form-control' .
        ($errors->has('titulo') ? ' is-invalid' : ''), 'placeholder' => 'Titulo']) }}
        {!! $errors->first('titulo', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">tablaEjemplo <b>titulo</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('descripcion') }}</label>
    <div>
        {{ Form::text('descripcion', $tablaEjemplo->descripcion, ['class' => 'form-control' .
        ($errors->has('descripcion') ? ' is-invalid' : ''), 'placeholder' => 'Descripcion']) }}
        {!! $errors->first('descripcion', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">tablaEjemplo <b>descripcion</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('especialidad_id') }}</label>
    <div>
        {{ Form::text('especialidad_id', $tablaEjemplo->especialidad_id, ['class' => 'form-control' .
        ($errors->has('especialidad_id') ? ' is-invalid' : ''), 'placeholder' => 'Especialidad Id']) }}
        {!! $errors->first('especialidad_id', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">tablaEjemplo <b>especialidad_id</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('fecha_inicio') }}</label>
    <div>
        {{ Form::text('fecha_inicio', $tablaEjemplo->fecha_inicio, ['class' => 'form-control' .
        ($errors->has('fecha_inicio') ? ' is-invalid' : ''), 'placeholder' => 'Fecha Inicio']) }}
        {!! $errors->first('fecha_inicio', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">tablaEjemplo <b>fecha_inicio</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('fecha_fin') }}</label>
    <div>
        {{ Form::text('fecha_fin', $tablaEjemplo->fecha_fin, ['class' => 'form-control' .
        ($errors->has('fecha_fin') ? ' is-invalid' : ''), 'placeholder' => 'Fecha Fin']) }}
        {!! $errors->first('fecha_fin', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">tablaEjemplo <b>fecha_fin</b> instruction.</small>
    </div>
</div>
<div class="form-group mb-3">
    <label class="form-label">   {{ Form::label('empresa_id') }}</label>
    <div>
        {{ Form::text('empresa_id', $tablaEjemplo->empresa_id, ['class' => 'form-control' .
        ($errors->has('empresa_id') ? ' is-invalid' : ''), 'placeholder' => 'Empresa Id']) }}
        {!! $errors->first('empresa_id', '<div class="invalid-feedback">:message</div>') !!}
        <small class="form-hint">tablaEjemplo <b>empresa_id</b> instruction.</small>
    </div>
</div>

    <div class="form-footer">
        <div class="text-end">
            <div class="d-flex">
                <a href="#" class="btn btn-danger">Cancel</a>
                <button type="submit" class="btn btn-primary ms-auto ajax-submit">Submit</button>
            </div>
        </div>
    </div>
