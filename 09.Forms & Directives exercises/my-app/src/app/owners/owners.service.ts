import { Injectable } from '@angular/core';

import data from '../data'

@Injectable()
export class OwnersService {
  getOwners () {
    return new Promise((resolve, reject) => {
    data
      .getOwners()
      .then(owners => {
          resolve(owners)
        })       
      }) 
  }

  getOwnerById (id) {
    return new Promise((resolve, reject) => {
      data
      .getOwnerById (id)
      .then(owner => {
        resolve(owner)
      })
    })
  }
}