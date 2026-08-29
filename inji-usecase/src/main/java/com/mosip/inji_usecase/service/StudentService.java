package com.mosip.inji_usecase.service;

import java.util.List;
import java.util.UUID;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.mosip.inji_usecase.dto.student.StudentDto;
import com.mosip.inji_usecase.entity.student.Student;
import com.mosip.inji_usecase.mapper.student.StudentMapper;
import com.mosip.inji_usecase.repository.student.StudentRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class StudentService {

    private static final Logger LOGGER = LoggerFactory.getLogger(StudentService.class);

    private final StudentRepository studentRepository;
    private final StudentMapper studentMapper;

    @Transactional
    public StudentDto createStudent(StudentDto dto) {
        LOGGER.info("Creating student with studentId: {}", dto.getStudentId());

        if (studentRepository.existsByStudentId(dto.getStudentId())) {
            throw new IllegalArgumentException("Student with ID '" + dto.getStudentId() + "' already exists");
        }
        if (studentRepository.existsByEmail(dto.getEmail())) {
            throw new IllegalArgumentException("Student with email '" + dto.getEmail() + "' already exists");
        }

        Student entity = studentMapper.toEntity(dto);
        if (entity.getStatus() == null) {
            entity.setStatus("ACTIVE");
        }
        Student saved = studentRepository.save(entity);
        LOGGER.info("Student created with id: {}", saved.getId());
        return studentMapper.toDto(saved);
    }

    @Transactional(readOnly = true)
    public StudentDto getByStudentId(String studentId) {
        LOGGER.debug("Fetching student by studentId: {}", studentId);
        Student student = studentRepository.findByStudentId(studentId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found with ID: " + studentId));
        return studentMapper.toDto(student);
    }

    @Transactional(readOnly = true)
    public StudentDto getById(UUID id) {
        LOGGER.debug("Fetching student by UUID: {}", id);
        Student student = studentRepository.findById(id)
                .orElseThrow(() -> new IllegalArgumentException("Student not found with UUID: " + id));
        return studentMapper.toDto(student);
    }

    @Transactional(readOnly = true)
    public List<StudentDto> getAllStudents() {
        LOGGER.debug("Fetching all students");
        return studentRepository.findAll().stream()
                .map(studentMapper::toDto)
                .toList();
    }

    @Transactional
    public StudentDto updateStudent(String studentId, StudentDto dto) {
        LOGGER.info("Updating student with studentId: {}", studentId);
        Student existing = studentRepository.findByStudentId(studentId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found with ID: " + studentId));

        // Check email uniqueness if changed
        if (dto.getEmail() != null && !dto.getEmail().equals(existing.getEmail())) {
            if (studentRepository.existsByEmail(dto.getEmail())) {
                throw new IllegalArgumentException("Email '" + dto.getEmail() + "' is already in use");
            }
        }

        studentMapper.updateEntityFromDto(dto, existing);
        Student saved = studentRepository.save(existing);
        LOGGER.info("Student updated: {}", saved.getStudentId());
        return studentMapper.toDto(saved);
    }

    @Transactional
    public void deleteStudent(String studentId) {
        LOGGER.info("Deleting student with studentId: {}", studentId);
        Student student = studentRepository.findByStudentId(studentId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found with ID: " + studentId));
        studentRepository.delete(student);
        LOGGER.info("Student deleted: {}", studentId);
    }
}
