import React, { Component } from 'react';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserEdit,
  faTrashAlt,
  faEdit
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faUserEdit,
  faTrashAlt,
  faEdit
);

export const iconEditPlayer = faUserEdit;
export const iconDeletePlayer = faTrashAlt;
export const iconEditTeam = faEdit;
export const iconDeleteTeam = faEdit;