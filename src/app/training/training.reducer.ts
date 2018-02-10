import {TrainingActions, SET_AVAILABLE_TRAINIGS, SET_FINISHED_TRAINIGS, START_TRAINING, STOP_TRAINING} from './training.actions';
import {Excercise} from './excercise.model';
import * as fromRoot from '../app.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

export interface TrainingState {
  availableExercises: Excercise[];
  finishedExercises: Excercise[];
  activeTraining: Excercise;
}

// Ya que training moduel es cargado con lazyload es necesario extender el estado par auqe no genere error en el mapeo
// de los reducers en app.module
// Es le nuevo global state después de cargar por lazy el training module
export interface State extends fromRoot.State {
  training: TrainingState;
}

const initialState: TrainingState = {
  availableExercises: [],
  finishedExercises: [],
  activeTraining: null,
};

export function trainingReducer(state: TrainingState = initialState, action: TrainingActions) {
  switch (action.type) {
    case SET_AVAILABLE_TRAINIGS:
      return {
        ...state,
        availableExercises: action.payload
      };
    case SET_FINISHED_TRAINIGS:
      return {
        ...state,
        finishedExercises: action.payload
      };
    case START_TRAINING:
      return {
        ...state,
        activeTraining: {...state.availableExercises.find(exercise =>  exercise.id === action.payload)}
      };
    case STOP_TRAINING:
      return {
        ...state,
        activeTraining: null
      };
    default:
      return state;
  }
}

export const getTrainingState = createFeatureSelector<TrainingState>('training');
// Selectors
export const getAvailableExercises = createSelector(getTrainingState, (state: TrainingState) => state.availableExercises);
export const getFinishedExercises = createSelector(getTrainingState, (state: TrainingState) => state.finishedExercises);
export const getactiveTraining = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining);
export const getIsTraining = createSelector(getTrainingState, (state: TrainingState) => state.activeTraining != null);
