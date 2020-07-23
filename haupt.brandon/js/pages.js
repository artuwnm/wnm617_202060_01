  const ListPage = async () => {

      let d = await query({
          type: "resources_by_user_id",
          params: [sessionStorage.userId]
      })

      console.log(d)

      $("#list-page .resourcelist")
          .html(makeResourceList(d.result))
  }

  const RecentPage = async () => {
      let d = await query({
          type: "recent_locations",
          params: [sessionStorage.userId]
      });

      let map_el = await makeMap("#map-page .map");

      let valid_resources = d.result.reduce((r, o) => {
          o.icon = o.img;
          if (o.lat && o.lng) r.push(o);
          return r;
      }, []);

      makeMarkers(map_el, valid_resources);
  }

  const ProfilePage = async () => {
      let d = await query({
          type: "user_by_id",
          params: [sessionStorage.userId]
      });

      console.log(d)

      $("#profile-page .profile")
          .html(makeUserProfile(d.result))
  }

  const ResourceProfilePage = async () => {
      if (sessionStorage.resourceId === undefined) throw ("No Resources ID in Storage");

      query({
              type: "resource_by_id",
              params: [sessionStorage.resourceId]
          })
          .then(d => {
              $("#resource-profile-page .profile-head")
                  .html(makeResourceProfile(d.result));
          });

      query({
              type: "locations_by_resource_id",
              params: [sessionStorage.resourceId]
          })
          .then(async (d) => {
              let map_el = await makeMap("#resource-profile-page .map");

              makeMarkers(map_el, d.result)
          });
  }




  // const ListPage = async () => {
  //     let d = await query({
  //         type: "resources_by_user_id",
  //         params: [3]
  //     })

  //     // Look up promises, async, and await
  //     console.log(d)

  //     $("#list-page .resourcelist")
  //         .html(makeResourceList(d.result))
  // }

  // const ProfilePage = async () => {
  //     let d = await query({
  //         type: "user_by_user_id",
  //         params: [sessionStorage.userId]
  //     })

  //     $("resource-profile-page .profile-body")
  //         .html(makeUserProfile(d.result))
  // }

  // //recent page is map page
  // const RecentPage = async () => {
  //     let d = await query({
  //         type: "recent_locations",
  //         params: [sessionStorage.userId]
  //     });

  //     let map_el = await makeMap("#map-page .map");

  //     let valid_resources = d.result.reduce((r, o) => {
  //         o.icon = o.img;
  //         if (o.lat && o.lng) r.push(o);
  //         return r;
  //     }, []);

  //     makeMarkers(map_el, valid_resources);
  // }

  // const ResourceProfilePage = async () => {
  //     if (sessionStorage.resourceId === undefined) throw ("No resource ID in Storage");
  //     query({
  //         type: "locations_by_resource_id",
  //         params: [sessionStorage.resourceId]
  //     }).then(async (d) => {
  //         let map_el = await makeMap("#resource-profile-page .map");

  //         makeMarkers(map_el, d.result)
  //     });


  // }