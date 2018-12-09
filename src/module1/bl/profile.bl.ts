import * as m from '../models';
import * as d from '../data';


export namespace ProfileBL {
    export async function createState(state: m.Profile) {
        return d.profileData.add(state);
    }

    export async function editState(state: m.Profile) {
        return d.profileData.update(state);
    }

    export async function getMany() {
        return d.profileData.getMany();
    }

    export async function getStateById(id: string) {
        return d.profileData.get({ _id: id });
    }

    export async function remove(id: string) {
        await d.profileData.remove(id);
    }

    export async function deleteAll(ids: string[]) {
        return d.profileData.removeMany(ids);
    }
}
