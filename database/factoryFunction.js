module.exports = function schools(db) {

    async function getSubjects() {
        const subjects = await db.manyOrNone('SELECT * FROM subject;');
        return subjects;
    }

    async function getGrade() {
        const studentGrade = await db.many('SELECT * FROM grade;');
        return studentGrade;
    }

    async function getSchool(){
        const schools = await db.many('SELECT * FROM school;');
        return schools;
    }
    async function addingStudents(fname,lname,email,grade){
        const query = 'SELECT * FROM add_learner($1, $2, $3, $4);';
        const studentValues = [fname, lname, email, grade];
        await db.oneOrNone(query, studentValues);
    }

    async function addingTeacher(fname, lname, email, schoolid){
        const query = 'SELECT * FROM add_teacher ($1, $2, $3, $4);';
        const teachersValues = [fname, lname, email, schoolid];
        await db.oneOrNone(query, teachersValues)
    }

    async function learnersForCertainSub(subId){
        const query ='SELECT * FROM find_learner_for_certain_subject($1);';
        const subValue = [subId];
        const learners = await db.manyOrNone(query, subValue)
        return learners;
    }

    async function getLearners(){
        const learners = await db.many('SELECT * FROM learner;');
        return learners;
    }

    async function checkSub(id){
        const query = 'SELECT * FROM subject WHERE id = $1;';
        const subjectId = [id];
        const nameOfSub = await db.oneOrNone(query, subjectId)
        const { name } = nameOfSub;
        return name;
    }

    async function clearingTeacher(id){
        const query = "DELETE from teacher_subject where teacher_id = $1"
        const teacherId = [id];
        const clear = await db.none(query,teacherId);
        return clear;
    }

    async function gettingTheSubjectId(subjectName){
        const query = 'SELECT * FROM subject WHERE name = $1;';
        const subject = [subjectName]
        const idValue = await db.oneOrNone(query, subject)
        const { id } = idValue;
        return id;
    }

    async function learnersDoingCertainSubject(subjectId){
        const query = 'SELECT * FROM find_learner_for_certain_subject($1);'
        const subId = [subjectId];
        const list = await db.manyOrNone(query,subId)
        return list;
    }

    async function teachersTeachingCertainSubject(subjectId){
        const query = 'select * from find_teacher_for_certain_subject($1);';
        const subId = [subjectId];
        const listOfTeachers = await db.manyOrNone(query,subId);
        return listOfTeachers;
    }

    async function showingAvailableTeachers(){
        const teachers = await db.many('SELECT * FROM teacher;');
        return teachers;
    }

    async function linkTeacherToSubject(teacheId, subjectId){
        const query = 'select * from link_teacher_to_subject($1, $2)';
        const values = [teacheId, subjectId]
        await db.oneOrNone(query,values)
    }

    return {
        getSubjects,
        getGrade ,
        getSchool,
        addingStudents,
        addingTeacher,
        learnersForCertainSub,
        getLearners,
        checkSub,
        gettingTheSubjectId ,
        learnersDoingCertainSubject,
        teachersTeachingCertainSubject,
        clearingTeacher ,
        showingAvailableTeachers,
        linkTeacherToSubject   
    }
}