import * as m from '../models';
import * as d from '../data';


export namespace ProfileBL {
    export async function createState(state: m.Profile) {
        return d.ProfileData.addState(state);
    }

    export async function editState(state: m.Profile) {
        return d.ProfileData.editState(state);
    }

    export async function getAll() {
        return d.ProfileData.getAllStates();
    }

    export async function getStateById(id: string) {
        return d.ProfileData.getState({ _id: id });
    }

    export async function remove(id: string) {
        await d.ProfileData.deleteStates([id]);
    }

    export async function deleteAll(ids: string[]) {
        return d.ProfileData.deleteStates(ids);
    }
}
