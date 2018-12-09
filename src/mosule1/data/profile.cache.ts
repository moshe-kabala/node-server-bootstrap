import { CollectionCache } from "@storex/container/lib/cache";
import { profileData } from "./profile.data";



export const DeviceCache = new CollectionCache({
  translateCache: ({ newData: data }) =>
   // map your data if you need
    data.map(d => {
      return d;
    }),
  name: "Profile",
  getOnInit: true, 
  delay: 1000,
  getData: () => profileData.getMany(),
  id: d => d._id
});
