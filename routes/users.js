"use strict";
var express = require('express');
var router = express.Router();
var pg = require("pg");
var knex = require("../db/knex");
var bcrypt = require("bcrypt");

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  // let id = req.session.id;
  let id = 1;
  var first;
  knex('users').select('users.first_name', 'jobs.position', 'companies.name', 'user_jobs.status', 'user_jobs.notes', 'jobs.salary', 'reviews.review_text', 'user_job_stages.stage', 'user_job_stages.notes as stage_notes')
  .join('user_job_stages', 'user_job_stages.user_id', 'users.id')
  .join('user_jobs', 'user_jobs.user_id', 'users.id')
  .join('jobs', 'user_jobs.job_id', 'jobs.id')
  .join('companies', 'jobs.company_id', 'companies.id')
  .join('reviews', 'reviews.company_id', 'companies.id')
  .where('users.id', id).then(function(info){
    res.json(info)
  });
  // knex('users').select('users.first_name', 'jobs.position', 'companies.name' 'user_jobs_stages.stage', 'user_jobs_stages.notes as stage_notes')
  // .join('user_jobs_stages')
});











module.exports = router;
